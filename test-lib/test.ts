import { Check } from './check';
export class Test {
    private name_class: string;
    private checks: Check[];
    
    constructor(name_class: string) {
        this.name_class = name_class;
    }
    public equal(observed_output: any, expected_output: any, description: string): boolean {
        let check: Check = new Check(observed_output, expected_output, description, 'equal')
        if(!check.validated()){
            console.log('Erro na classe: ' + this.name_class);
            console.log('Checagem: ' + check.getDescription());
            console.log('\t' + check.getErrorDescription() + '\n');
            process.exit(1);
        }
        return true;
    }
    public end(): void{
        console.log('Classe ' + this.name_class + ' OK')
    }
}