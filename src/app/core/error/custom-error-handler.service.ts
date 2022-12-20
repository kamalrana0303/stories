import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class CustomErrorHandlerService implements ErrorHandler {
  constructor(private snackbar:MatSnackBar, private zone:NgZone) {}
  handleError(error: any): void {
    this.zone.run(()=> {
        
        this.snackbar.open('Error was detected! we already working on it', 'Close', {
            duration: 4000
        })
        console.warn("caught by custom error handler,", error)
    })
  }
}
