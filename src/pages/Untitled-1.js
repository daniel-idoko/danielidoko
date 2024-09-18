<div>
                {/* Article Title */}
                <h1 className={classes.Blogtitle}>How to loop through nested arrays in Javascript.</h1>

                {/* Article Explanation */}
                <p className={classes.BlogExplanation}>This article explains how to loop through a nested are with objects and work with each item or value accordingly in Javascript</p>

                {/* Article Image */}
                <div>
                    <img src='/img/bg6.jpg' alt='img' className={classes.BlogBannerImg}/>
                </div>

                <p className={classes.BoldParagraph}>Looping nested arrarys:</p>

                <ol className={classes.ol}>
                    <li className={classes.li}>Loop over the outer arrary using the <span className={classes.enphases}>'.map()'</span> method to access each item</li>
                    <li className={classes.li}><span className={classes.enphases}>'Destructure'</span> each object to access its value</li>
                    <li className={classes.li}>Loop though the value of each object</li>
                </ol>

                <p className={classes.Paragraph}>The follow example shows how you can loop through an array (<span className={classes.enphases}>'friendsList'</span>)  in an object nested in an array (<span className={classes.enphases}>'people'</span>)</p>

                <div className={classes.CodeBoard}>
                    <div className={classes.CodeBoardTitle}>
                        <p className={classes.CodeBoardTitleP}>Javascript</p>
                    </div>
                    <div className={classes.Code}>

                        <Highlight className='language-javascript'>
                                
                        {`
    const people = [
        {
            name: 'John Doe',
            age: 13,
            friendsList: ['Bob', 'James', 'Lora'],
        },
        {
            name: 'Jane Doe',
            age: 15,
            friendsList: ['Jone', 'Mat', 'Lora'],
        },
        {
            name: 'David Wallo',
            age: 13,
            friendsList: ['Max', 'Mary', 'Liya'],
        },
    ]         
                        `}
                            </Highlight>
                    </div>
                </div>


                <p className={classes.Paragraph}>Loop through the <span className={classes.enphases}>'people'</span> arr</p>

                <div className={classes.CodeBoard}>
                    <div className={classes.CodeBoardTitle}>
                        <p className={classes.CodeBoardTitleP}>Javascript</p>
                    </div>
                    <div className={classes.Code}>

                        <Highlight className='language-javascript'>
                                
                        {`
    people.map((item, index) => {
        console.log(index,  item)
    })

    //  CONSOLE:
    //  0 {name: 'John Doe', age: 13, frendsList: Array(3)}
    //  1 {name: 'Jane Doe', age: 15, frendsList: Array(3)}
    //  2 {name: 'David Wallo', age: 13, frendsList: Array(3)}        
                        `}
                            </Highlight>
                    </div>
                </div>


                <p className={classes.Paragraph}><span className={classes.enphases}>'Destructure'</span> each objects to access its values</p>

                <div className={classes.CodeBoard}>
                    <div className={classes.CodeBoardTitle}>
                        <p className={classes.CodeBoardTitleP}>Javascript</p>
                    </div>
                    <div className={classes.Code}>

                        <Highlight className='language-javascript'>
                                
                        {`
    people.map((item, index) => {
        const { name, age, friendsList } = item
    
        console.log(\`\${name} friends are:\`)

        friendsList.map((item, index) => {
        console.log(index, item)
        })
    })   
    
    //  CONSOLE:
    //  John Doe friend are:
    //  0 'Bob'
    //  1 'James'
    //  2 'Lora'
    //  Jane Doe friend are:
    //  0 'Jone'
    //  1 'Mat'
    //  2 'Lora'
    //  David Wallo friend are:
    //  0 'Max'
    //  1 'Mary'
    //  2 'Liya'

                        `}
                            </Highlight>
                    </div>
                </div>

                <p className={classes.BoldParagraph}>Conclusion:</p>
                <p className={classes.Paragraph}>Working with nested array can be confusing when y're just starting out. But with a few practice you realize it realy easy to handle. <br/> Using the <span className={classes.enphases}>'.map()'</span> method is a great way to loop through an array, accessing each item and its index. Another good Javascript array method for looping an array it the <span className={classes.enphases}>'.forEach()'</span> method</p>
            </div>