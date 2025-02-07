(() => {
        const display_time = document.getElementById('display-time');
        
        //The whole stopwatch:
        const stop_watch = document.querySelector('.stopwatch');
       
        let [secs, mins, hours] = [0, 0, 0];
        let timer = null; 

        function update_display() {
                secs++;
                if (secs === 60) {
                        secs = 0;
                        mins++;

                        if (mins === 60) {
                                mins = 0;
                                hours++;
                        }
                }
                format_display()
        }

        function format_display() {
                const formated_hours = hours >= 10 ? hours : `0${hours}`; 
                const formated_mins  = mins >= 10 ? mins : `0${mins}`;
                const formated_secs  = secs >= 10 ? secs : `0${secs}`;

                display_time.innerText = `${formated_hours}:${formated_mins}:${formated_secs}`;
        }

        function trigger_watch() {
                if (timer !== null) {
                        clearInterval(timer);
                }
                
                timer = setInterval(update_display, 1000);
        }

        function stop_watch_func() {
                clearInterval(timer);
        }
        
        function reset_watch() {
                [secs, mins, hours] = [0, 0, 0];
                display_time.innerText = '00:00:00';
                clearInterval(timer);
        }

        function handle_click() {
                stop_watch.addEventListener('click', (event) => {
                        const el = event.target;
                        if (el.classList.contains('stop-btn')) {
                                stop_watch_func();
                        }
                        
                        if (el.classList.contains('play-btn')) {
                                trigger_watch();
                        }
                        
                        if (el.classList.contains('reset-btn')) {
                                reset_watch();
                        }
                });                
        }

        handle_click();
})();