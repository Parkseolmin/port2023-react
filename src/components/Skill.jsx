import React from 'react';

const skillText = [
  {
    title: '꿈을 설계하고 디자인하다.',
    desc: '프론트엔드 개발은 예술과 과학의 조합입니다. 디자인적 감각과 기술적 지식을 융합하여 아름다운 인터페이스와 효율적인 기능을 제공하는 것이 저의 목표이자 프론트엔드 개발자가 되기 위한 이유입니다.',
  },
  {
    title: '열심히 할수록 기회는 따른다.',
    desc: '운이 좋은 사람은 없습니다. 단지 운을 만들 뿐입니다. 운을 만들기 위해서는 내가 좋아하는 일이나 자신이 하고 싶은 일에 몰두하면 됩니다. 몰두 하다보면 길이 보이고 방향이 보이게 됩니다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것입니다.',
  },
  {
    title: '나에게 정직하다.',
    desc: '정직은 다른 사람보다 나에게 큰 의미를 부여해야 합니다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없습니다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 됩니다.',
  },
];
const Skill = () => {
  return (
    <section id='skill'>
      <div className='skill__inner'>
        <h2 className='skill__title'>
          About Me <em>나의 가치관</em>
        </h2>
        <div className='skill__desc'>
          {skillText.map((skill, key) => (
            <div key={key}>
              <span>{key + 1}</span>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
