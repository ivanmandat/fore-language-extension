# IMetabaseObjectFindInfo.ScanNestedNamespaces

IMetabaseObjectFindInfo.ScanNestedNamespaces
-


# IMetabaseObjectFindInfo.ScanNestedNamespaces


## Синтаксис


ScanNestedNamespaces: Boolean;


## Описание


Свойство ScanNestedNameSpaces
 определяет признак поиска по вложенным пространствам имен.


## Комментарии


По умолчанию свойству установлено значение False,
 при этом поиск осуществляется среди объектов репозитория. Если свойству
 установить значение True, то при
 поиске также будут просматриваться объекты, являющиеся контейнерами для
 других объектов. К таким объектам относятся: Репозиторий НСИ, База данных
 временных рядов, Контейнер моделирования, Сборка.


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

	    FInfo.Attribute := FindAttribute.Name;

	    FInfo.ScanNestedNamespaces := True;

	    FInfo.Text := "Модель";

	    FInfo.WholeWordsOnly := False;

	    MDescs := MB.Find(FInfo);

	    For Each MDesc In MDescs Do

	        Debug.WriteLine("Идентификатор: " + MDesc.Id + "; Наименование: " + MDesc.Name);

	    End For;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск всех объектов, содержащих
 в своем наименовании текст «Модель». Поиск будет осуществляться по всему
 репозиторию. Также будут проверяться объекты, являющиеся контейнерами
 для других объектов. Наименования и идентификаторы найденных объектов
 будут выведены в консоль среды разработки.


См. также:


[IMetabaseObjectFindInfo](IMetabaseObjectFindInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
