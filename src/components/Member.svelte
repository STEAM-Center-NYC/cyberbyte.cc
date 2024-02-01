<script lang="ts">
    import type { CollectionEntry } from 'astro:content'
    import MemberModal from './MemberModal.svelte';
    export let member: CollectionEntry<'members'>

    let modal = false
</script>

<button class="member" on:click={() => modal = true}>
    <img src={member.data.image} alt={member.data.name}>
    <h3>{member.data.name}</h3>
    <p>Interests: {member.data.interests.join(', ')}</p>
    <MemberModal bind:isOpen={modal} member={member} />
</button>