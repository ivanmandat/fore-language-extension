# IMetabaseDeviceDescriptors.Count

IMetabaseDeviceDescriptors.Count
-


# IMetabaseDeviceDescriptors.Count


## Синтаксис


		Count: Integer;


## Описание


Свойство Count возвращает
 количество устройств в списке доступных для печати принтеров.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MS: IMetabaseSecurity;

		    MP: IMetabasePolicy;

		    DP: IMetabaseDevicePolicy;

		    DevDess: IMetabaseDeviceDescriptors;

		    DevDes: IMetabaseDeviceDescriptor;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    MS := MB.Security;

		    MP := Ms.Policy;

		    DP := MP.PrintersPolicy;

		    DevDess := DP.Enumerate;

		    For i:=0 To DevDess.Count-1 Do

		        DevDes:= DevDess.Item(0);

		        Debug.WriteLine(DevDes.DeviceName);

		        Debug.WriteLine(DevDes.Key);

		        Debug.WriteLine("----------------");

		    End For;

		End Sub UserProc;


После выполнения примера в консоль будет выведено наименование и ключ
 устройства.


См. также:


[IMetabaseDeviceDescriptors](IMetabaseDeviceDescriptors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
