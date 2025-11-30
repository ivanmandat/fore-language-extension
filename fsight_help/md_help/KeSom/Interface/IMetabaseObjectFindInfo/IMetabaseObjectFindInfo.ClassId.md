# IMetabaseObjectFindInfo.ClassId

IMetabaseObjectFindInfo.ClassId
-


# IMetabaseObjectFindInfo.ClassId


## Синтаксис


		ClassId: Integer;


## Описание


Свойство ClassId определяет
 класс объектов, которые будут проверяться в процессе поиска.


## Комментарии


Для задания класса объектов необходимо использовать значения, содержащиеся
 в перечислимом типе [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm),
 а также [MetabaseObjectMetaClass](../../Enums/MetabaseObjectMetaclass.htm).


По умолчанию свойству установлено значение "-1", при этом
 поиск осуществляется среди всех объектов репозитория.


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

		    FInfo.ClassId := MetabaseObjectClass.KE_CLASS_STDCUBE;

		    FInfo.WholeWordsOnly := False;

		    MDescs := MB.Find(FInfo);

		    For Each MDesc In MDescs Do

		         Debug.WriteLine("Идентификатор: " + MDesc.Id + "; Наименование: " + MDesc.Name);

		   End For;

		End Sub UserProc;


После выполнения примера будет осуществлен поиск всех стандартных кубов,
 имеющихся в репозитории. Наименования и идентификаторы найденных объектов
 будут выведены в консоль среды разработки.


См. также:


[IMetabaseObjectFindInfo](IMetabaseObjectFindInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
