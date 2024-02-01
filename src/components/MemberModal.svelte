<script lang="ts">
    import Portal from "svelte-portal"
    import type { CollectionEntry } from 'astro:content'

    export let isOpen: boolean
    export let member: CollectionEntry<'members'>
</script>

<style>    
    .modal {
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
    
    /* Modal Content */
    .modal-content {
      background-color: #fefefe;
      margin: auto;
      padding: 10px 20px;
      border: 1px solid #888;
      max-width: 600px;
      border-radius: 4px;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
    }
    
    /* The Close Button */
    .close {
      color: #aaaaaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    
    .close:hover,
    .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
</style>

{#if isOpen}
    <Portal target="body">
        <div class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>{member.data.name}</h2>
                    <button on:click={() => isOpen = false} class="close">&times;</button>
                </div>
                <div>
                    {@html member.body.replace(/\n/g, '<br />')}
                </div>
            </div>
        </div>
    </Portal>
{/if}