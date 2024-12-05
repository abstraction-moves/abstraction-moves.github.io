let s = null
Display(Var('restaurants'))

s = Select(restaurants)
Revisualize(s, 'Grid')

let tacos = restaurants.filter((d) => d.name == 'Taco Stand')
s = Select(tacos)
s = SpanSelection(s)
Encircle(s)

s = Select(tacos.map((t) => t.id))
Style(s, { border: '2px solid black', borderRadius: '5px' })

Clear(s)
