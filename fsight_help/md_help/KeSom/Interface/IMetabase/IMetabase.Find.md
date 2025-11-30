# IMetabase.Find

IMetabase.Find
-


# IMetabase.Find


## Синтаксис


		Find(Info: [IMetabaseObjectFindInfo](../IMetabaseObjectFindInfo/IMetabaseObjectFindInfo.htm)):
		 [IMetabaseObjectDescriptors](../IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm);


## Параметры


Info.
 Информация для осуществления поиска объекта репозитория.


## Описание


Метод Find производит поиск
 объекта (объектов), удовлетворяющего (удовлетворяющих) условиям поиска.


## Комментарии


Метод возвращает пустую коллекцию описаний, если ни один объект не найден.


## Пример


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MDescs: IMetabaseObjectDescriptors;

		    MDesc: IMetabaseObjectDescriptor;

		    FInfo: IMetabaseObjectFindInfo;

		Begin

		    MB := MetabaseClass.Active;

		    FInfo := MB.CreateFindInfo;

		    FInfo.Text := "OBJTEST";

		    FInfo.Attribute := FindAttribute.NameOrIdent;

		    FInfo.WholeWordsOnly := False;

		    MDescs := MB.Find(FInfo);

		    If MDescs.Count <> 0 Then

		        For Each MDesc In MDescs Do

		            Debug.WriteLine("Идентификатор: " + MDesc.Id + "; Наименование: " + MDesc.Name);

		        End For;

		    Else

		        Debug.WriteLine("Объекты не найдены.");

		End If;

		End Sub UserProc;


При выполнении примера будет осуществлён поиск всех объектов, содержащих
 в своем наименовании или идентификаторе текст «OBJTEST». Наименования
 и идентификаторы найденных объектов будут выведены в консоль среды разработки.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
