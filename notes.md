- set the height of the index container based on the browser height
- add google analytics
- 



/*
        &::after {
          z-index: 200;
          position: absolute;
          content:  " ";
          top:  0;
          left:  0;
          width:  100%;
          height:  100%;
          overflow: hidden;
          background-color: rgba(2550,255,255,0.1);;
          box-shadow: 0 0 1px 0 rgba(0,0,0,0.1);
          border-radius: 3px;
        }
        &::before {
          z-index: -100;
          position: absolute;
          content:  " ";
          top:  0;
          left:  0;
          width:  84%;
          height:  94%;
          margin-top:  2%;
          margin-left:  8%;
          overflow: hidden;
          background-color: white;
          border-radius: 3px;
          box-shadow: 0 11px 20px 0 rgba(74,144,226,0.07), 
                      0 2px 6px 0 rgba(0,0,0,0.2), 
                      0 12px 30px 0 rgba(71,74,73,0.2), 
                      0 20px 80px 0 rgba(71,74,73,0.2);
        }

        */