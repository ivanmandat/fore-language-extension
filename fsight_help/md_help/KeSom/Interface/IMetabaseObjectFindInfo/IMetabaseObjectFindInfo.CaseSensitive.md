# IMetabaseObjectFindInfo.CaseSensitive

IMetabaseObjectFindInfo.CaseSensitive
-


# IMetabaseObjectFindInfo.CaseSensitive


## Синтаксис


		CaseSensitive: Boolean;


## Описание


Свойство CaseSensitive определяет
 признак учета регистра символов при поиске.


## Комментарии


Допустимые значения:


	- True. Учитывать регистр.


	- False. Значение по умолчанию.
	 Не учитывать регистр.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MDescs: IMetabaseObjectDescriptors;

		    MDesc: IMetabaseObjectDescriptor;

		    FInfo: IMetabaseObjectFindInfo;

		Begin

		    MB := MetabaseClass.Active;

		    FInfo := MB.CreateFindInfo;

		    FInfo.Text := "Object";

		    FInfo.Attribute := FindAttribute.NameOrIdent;

		    FInfo.CaseSensitive := True;

		    FInfo.WholeWordsOnly := False;

		    //Поиск объектов

		    MDescs := MB.Find(FInfo);

		    //Просмотр результатов

		    For Each MDesc In MDescs Do

		        Debug.WriteLine("Идентификатор: " + MDesc.Id + "; Наименование: " + MDesc.Name);

		    End For;

		End Sub UserProc;


При выполнении примера будет осуществлен поиск всех объектов, содержащих
 в своем наименовании или идентификаторе текст «Object». При поиске будет
 учитываться регистр символов. Наименования и идентификаторы найденных
 объектов будут выведены в консоль среды разработки.


См. также:


[IMetabaseObjectFindInfo](IMetabaseObjectFindInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
