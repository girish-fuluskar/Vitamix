export class base64 {
    PADCHAR = '=';
    ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    constructor(){}

    encode (value:string){
        if (arguments.length !== 1) {throw new SyntaxError("Not enough arguments")}
            var i, b10;
            var x = [];
                
            value = '' + value; // convert to string
            var imax = value.length - value.length % 3;
            if (value.length === 0) {return value}

            for (i = 0; i < imax; i += 3) {
                b10 = (this.getbyte(value, i) << 16) | (this.getbyte(value, i + 1) << 8) | this.getbyte(value, i + 2);
                x.push(this.ALPHA.charAt(b10 >> 18));
                x.push(this.ALPHA.charAt((b10 >> 12) & 0x3F));
                x.push(this.ALPHA.charAt((b10 >> 6) & 0x3f));
                x.push(this.ALPHA.charAt(b10 & 0x3f));
            }
            switch (value.length - imax) {
                case 1:
                    b10 = this.getbyte(value, i) << 16;
                    x.push(this.ALPHA.charAt(b10 >> 18) + this.ALPHA.charAt((b10 >> 12) & 0x3F) +
                        this.PADCHAR + this.PADCHAR);
                    break;
                case 2:
                    b10 = (this.getbyte(value, i) << 16) | (this.getbyte(value, i + 1) << 8);
                    x.push(this.ALPHA.charAt(b10 >> 18) + this.ALPHA.charAt((b10 >> 12) & 0x3F) +
                        this.ALPHA.charAt((b10 >> 6) & 0x3f) + this.PADCHAR);
                    break;
            }
            return x.join('');
    }

    decode (value:string){   
        value = '' + value; // convert to string
        var pads = 0, i, b10;
        var imax = value.length
        if (imax === 0) {return value}
        if (imax % 4 !== 0) {throw new Error('Invalid character')}

        pads = 0
        if (value.charAt(imax - 1) === this.PADCHAR) {
            pads = 1;
            if (value.charAt(imax - 2) === this.PADCHAR) {
                pads = 2;
            }
            // either way, we want to ignore this last block
            imax -= 4;
        }

        var x = [];
        for (i = 0; i < imax; i += 4) {
            b10 = (this.getbyte64(value, i) << 18) | (this.getbyte64(value, i + 1) << 12) |
                (this.getbyte64(value, i + 2) << 6) | this.getbyte64(value, i + 3);
            x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff, b10 & 0xff));
        }

        switch (pads) {
            case 1:
                b10 = (this.getbyte64(value, i) << 18) | (this.getbyte64(value, i + 1) << 12) | (this.getbyte64(value, i + 2) << 6);
                x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff));
                break;
            case 2:
                b10 = (this.getbyte64(value, i) << 18) | (this.getbyte64(value, i + 1) << 12);
                x.push(String.fromCharCode(b10 >> 16));
                break;
        }
        return x.join('');
    }

    private getbyte (s: string, i: number){
        var x = s.charCodeAt(i);
        if (x > 255) {
            throw new Error("Invalid character");
        }
        return x;
    }

    private getbyte64(s: string, i: number){
        var idx = this.ALPHA.indexOf(s.charAt(i));
        if (idx === -1) {
            throw new Error("Invalid character");
        }
        return idx;
    }    
}