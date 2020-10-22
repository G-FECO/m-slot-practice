<template>
  <div>
    <h1>1차 슬롯 연습</h1>
    <h2>slot이 있는 상황</h2>
    <BasicSlot>
      <p>Slot에 데이터 추가한 부분</p>
    </BasicSlot>
    <BasicSlot>
      <p>Slot에 데이터 추가한 부분2</p>
    </BasicSlot>
    <h2>slot이 비어 있는 상황</h2>
    <BasicSlot>
    </BasicSlot>

    <hr />
    <h1>2차 슬롯 연습</h1>
    <h2>슬롯에 이름이 있는 경우</h2>
    header 부분 부터 먼저 나와야함
    <NamedSlot>
      <p slot="content">컨텐츠 영역 슬롯</p>
      <p slot="header">헤더 영역 슬롯</p>
    </NamedSlot>
  </div>
</template>

<script>
// @ is an alias to /src
import BasicSlot from '@/components/BasicSlot.vue';
import NamedSlot from '@/components/NamedSlot.vue';

export default {
  name: 'Home',
  components: {
    BasicSlot,
    NamedSlot,
  },
};
</script>
