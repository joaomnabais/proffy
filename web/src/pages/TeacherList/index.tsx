import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select 
            name="subject" 
            label="Matéria"
            value={subject}
            onChange={e => { setSubject(e.target.value) }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />
          <Select 
            name="week_day" 
            label="Dia da semana"
            value={week_day}
            onChange={e => { setWeek_day(e.target.value) }}
            options={[
              { value: '0', label: 'domingo' },
              { value: '1', label: 'segunda-feira' },
              { value: '2', label: 'terça-feira' },
              { value: '3', label: 'quarta-feira' },
              { value: '4', label: 'quinta-feira' },
              { value: '5', label: 'sexta-feira' },
              { value: '6', label: 'sábado' },
            ]}
          />
          <Input 
            type="time" 
            name="time" 
            label="Hora" 
            value={time}
            onChange={e => { setTime(e.target.value) }}
          />

          <button type="submit">
            Pesquisar
          </button>
        </form>
      </PageHeader>

      <main>
        {
          teachers.length > 0 
          ? 
          teachers.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.id} teacher={teacher} />
          }) 
          :
          <div className="no-results">
            <p>Nenhum professor encontrado com a sua pesquisa.</p>
          </div>
        }
      </main>
    </div>
  );
}

export default TeacherList;