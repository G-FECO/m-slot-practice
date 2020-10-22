<template>
  <div>
      <hr />
      <h3>여긴 헤더 영역</h3>
      <slot name="header"></slot>
      <hr />
      <h3>여긴 컨텐츠 영역</h3>
      <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'NamedSlot',
};
</script>
