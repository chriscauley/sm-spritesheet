<template>
  <div>{{ $route.params.wardrobe_id }}</div>
</template>

<script>
export default {
  name: 'EditWardrobe',
  __route: {
    path: '/app/wardrobe/:wardrobe_id',
  },
}
</script>
