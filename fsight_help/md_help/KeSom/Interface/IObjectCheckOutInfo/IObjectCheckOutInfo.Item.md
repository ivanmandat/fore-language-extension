# IObjectCheckOutInfo.Item

IObjectCheckOutInfo.Item
-


# IObjectCheckOutInfo.Item


## Синтаксис


Item(Index: Integer): [IObjectCheckOutInfoUser](../IObjectCheckOutInfoUser/IObjectCheckOutInfoUser.htm);


## Параметры


Index. Индекс
 записи о блокировании объекта репозитория.


## Описание


Свойство Item возвращает информацию
 о блокировке объекта репозитория.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором Obj_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    Info: IObjectCheckOutInfo;

	    UserInfo: IObjectCheckOutInfoUser;

	    i, c: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("Obj_1");

	    Info := MDesc.GetCheckOutInfo;

	    c := Info.Count;

	    For i := 0 To c - 1 Do

	        UserInfo := Info.Item(i);

	        Debug.Write("Пользователь: " + UserInfo.UserName);

	        Debug.Write("; Рабочая
	 станция: " + UserInfo.MachineName);

	        Debug.Write("; Дата и время блокировки: " + UserInfo.Stamp.ToString);

	        Debug.WriteLine("; Комментарий: " + UserInfo.Comment);

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена информация
 о блокировках указанного объекта.


См. также:


[IObjectCheckOutInfo](IObjectCheckOutInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
