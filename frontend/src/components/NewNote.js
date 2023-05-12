function NewNote(){
    return(
    
        <div class="input-group mx-auto my-3" style={{width: "500px",height: "50px"}}>
  <input type="search" class="form-control rounded" placeholder="Add New Note" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">ADD</button>
</div>
        
    )
}

export default NewNote