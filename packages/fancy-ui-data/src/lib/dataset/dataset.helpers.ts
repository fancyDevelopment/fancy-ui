export class DatasetHelpers {
    static getKeyPathValue<TDataObject, TValue>(dataObject: TDataObject, path: string): TValue | null {
        if(!dataObject) return null;

        const pathSegments = path.split('.');

        let currentValue: any = dataObject;

        pathSegments.forEach(segment => {
            if(currentValue) {
                currentValue = currentValue[segment];
            }
        });

        return currentValue as TValue;
    }
}