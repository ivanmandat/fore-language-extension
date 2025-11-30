# IMetabaseObjectDescriptor.GetCheckOutInfo

IMetabaseObjectDescriptor.GetCheckOutInfo
-


# IMetabaseObjectDescriptor.GetCheckOutInfo


## Синтаксис


GetCheckOutInfo: [IObjectCheckOutInfo](../IObjectCheckOutInfo/IObjectCheckOutInfo.htm);


## Описание


Метод GetCheckOutInfo возвращает
 информацию о блокировках объекта.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором Report_1.


Добавьте ссылки на системные сборки: Metabase, Ui.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    Info: IObjectCheckOutInfo;

	    UserInfo: IObjectCheckOutInfoUser;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("Report_1");

	    Info := MDesc.GetCheckOutInfo;

	    For Each UserInfo In Info Do

	        Debug.Write("Пользователь: " + UserInfo.UserName);

	        Debug.Write("; Станция: " + UserInfo.MachineName);

	        Debug.Write("; Дата и время блокировки: " + UserInfo.Stamp.ToString);

	        Debug.WriteLine("; Комментарий: " + UserInfo.Comment);

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена информация
 о блокировках указанного объекта.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
