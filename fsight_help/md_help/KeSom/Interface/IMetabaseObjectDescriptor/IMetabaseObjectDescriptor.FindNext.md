# IMetabaseObjectDescriptor.FindNext

IMetabaseObjectDescriptor.FindNext
-


# IMetabaseObjectDescriptor.FindNext


## Синтаксис


		FindNext(Info: [IMetabaseObjectFindInfo](../IMetabaseObjectFindInfo/IMetabaseObjectFindInfo.htm)):
		 [IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm);


## Параметры


Info.
 Информация, необходимая для поиска описания объекта.


## Описание


Метод FindNext осуществляет
 поиск следующего объекта, удовлетворяющего условиям поиска.


## Комментарии


Если объект не найден, то метод возвращает значение Null.


Условия поиска передаются посредством параметра Info.


## Пример


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    FInfo: IMetabaseObjectFindInfo;

		    MDesc: IMetabaseObjectDescriptor;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    FInfo := MB.CreateFindInfo;

		    FInfo.Text := "Form";

		    FInfo.Attribute := FindAttribute.NameOrIdent;

		    FInfo.WholeWordsOnly := False;

		    MDesc := MB.Root;

		    For i := 0 To 9 Do

		    MDesc := MDesc.FindNext(FInfo);

		    If MDesc <> Null Then

		        Debug.WriteLine("Идентификатор: " + MDesc.Id + "; Наименование: " + MDesc.Name);

		    Else

		        Break

		    End If;

		End For;

		End Sub UserProc;


После выполнения примера будет осуществлен поиск первых десяти объектов,
 содержащих в наименовании или идентификаторе текст «Form». Список найденных
 объектов будет выведен в консоль среды разработки.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
