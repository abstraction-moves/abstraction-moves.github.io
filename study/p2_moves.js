let filter_df = df.filter((d) => d.mass > 200)

let s = null
Display(df)
Display(filter_df)

s = Select(df, filter_df)
Revisualize(s, 'Grid')
