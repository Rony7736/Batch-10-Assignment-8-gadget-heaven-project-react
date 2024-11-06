<div>
            
{`${ gadgets ? 
     <div className="grid grid-cols-3 gap-6">
     {
         gadgets.map((card) => (<Card card={card} key={card.id}></Card>))
     }
 </div>

     : 'No Data Found'}`}
</div>