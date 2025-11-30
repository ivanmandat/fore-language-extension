# IMetabaseObjectDescriptor.IsShortcut

IMetabaseObjectDescriptor.IsShortcut
-


# IMetabaseObjectDescriptor.IsShortcut


## Синтаксис


IsShortcut: Boolean;


## Описание


Свойство IsShortcut возвращает
 признак того, что данный объект является ярлыком на другой объект репозитория.


## Комментарии


Свойство возвращает значение True,
 если данный объект является ярлыком для другого объекта репозитория.


Примечание.
 Если объект является ярлыком для объекта из другого репозитория, то данное
 свойство вернет значение False
 и для проверки необходимо также использовать свойство [IMetabaseObjectDescriptor.IsLink](IMetabaseObjectDescriptor.IsLink.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором ObjTest.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("ObjTest");

	    If MDesc.IsShortcut Then

	        Debug.WriteLine(MDesc.Shortcut.Id);

	    End If;

	End Sub UserProc;


После выполнения если указанный объект является ярлыком, то в консоль
 среды разработки будет выведен идентификатор объекта, на который ссылается
 данный ярлык.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
