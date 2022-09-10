export class Check {
    private observed_output: any;
    private expected_output: any;
    private description: string;
    private output_type: string;
    private error_description: string;
    private validated_check: boolean;

    constructor(observed_output: any, expected_output: any, description: string, checking_method: string) {
        this.observed_output = observed_output;
        this.expected_output = expected_output;
        this.description = description;
        if(checking_method == 'equal'){
            this.equal();
        }
    }
    private equal(): void{
        if(!(typeof this.observed_output == typeof this.expected_output)){
            this.validated_check = false;
            this.error_description = "A saída observada não é do mesmo tipo da saída esperada.";
            return;
        }else{
            if(this.observed_output != this.expected_output){
                this.validated_check = false;
                this.error_description = "A saída observada é diferente da saída esperada.";
            }else{
                this.validated_check = true;
                this.error_description = "Nenhum erro.";
            }
        }
    }
    public getDescription(): string{
        return this.description;
    }
    public getErrorDescription(): string{
        return this.error_description;
    }
    public validated(): boolean{
        return this.validated_check;
    }
}