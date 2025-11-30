# Работа с ярлыком: Fore

Работа с ярлыком: Fore
-


# Работа с ярлыком


	В репозитории платформы реализованы различные классы объектов, имеющие
	 определенное назначение и выполняющие определенные для них функции.
	 Также в репозитории имеется такой класс объектов как - Ярлык.
	 Ярлык - это ссылка на существующий
	 объект какого-либо класса. Ярлык инкапсулирует в себе свойства объекта,
	 на который он ссылается. При просмотре/редактировании ярлыка будет
	 открыт соответствующий инструмент платформы или мастер, предназначенный
	 для редактирования свойств соответствующего объекта.


	При работе из языка Fore
	 для проверки объекта на соответствие ярлыку можно использовать следующие
	 свойства:


		- [IMetabaseObjectDescriptor.IsShortcut](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsShortcut.htm).
		 Свойство возвращает значение True,
		 если объект является ярлыком на объект в текущем репозитории;


		- [IMetabaseObjectDescriptor.IsLink](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsLink.htm).
		 Свойство возвращает значение True,
		 если объект является ярлыком на объект из другого репозитория.


	[Класс
	 ярлыка](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.ClassId.htm) будет соответствовать классу объекта, на который он ссылается.


## Создание ярлыка


	Создание ярлыка осуществляется таким же образом как и создание других
	 объектов репозитория. Для создания ярлыка необходимо в параметрах
	 создаваемого объекта свойству [IMetabaseObjectCreateInfo.IsShortcut](../Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.IsShortcut.htm)
	 установить значение True,
	 а в свойстве [IMetabaseObjectCreateInfo.Shortcut](../Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.Shortcut.htm)
	 указать описание объекта, на который будет ссылаться ярлык:


		Var

		    MB: IMetabase;

		    CrInfo: IMetabaseObjectCreateInfo;

		    ShortcutDesc: IMetabaseObjectDescriptor;

		Begin

		    MB := MetabaseClass.Active;

		    CrInfo := MB.CreateCreateInfo;

		    CrInfo.Id := "Shortcut_OBJTEST";

		    CrInfo.Name := "Ярлык для OBJTEST";

		    CrInfo.Parent := MB.Root;

		    CrInfo.Permanent := True;

		    CrInfo.Shortcut := MB.ItemById("OBJTEST");

		    CrInfo.IsShortcut := True;

		    ShortcutDesc := MB.CreateObject(CrInfo);


	При выполнении примера в корневом каталоге репозитория будет создан
	 ярлык для объекта «OBJTEST».


## Создание ярлыка на объект из другого репозитория


	Для создания ярлыка на объект из другого репозитория предварительно
	 в текущем репозитории необходимо создать объект - [Связь
	 с репозиторием](../Interface/IMetabaseLink/IMetabaseLink.htm). После этого в коде в свойстве [IMetabaseObjectCreateInfo.Link](../Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.Link.htm)
	 указывается связь с репозиторием, а в свойстве [IMetabaseObjectCreateInfo.Shortcut](../Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.Shortcut.htm)
	 описание объекта из другого репозитория. Также в свойстве [IMetabaseObjectCreateInfo.ClassId](../Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.ClassId.htm)
	 необходимо указать класс объекта, для которого создается ярлык:


		Var

		    MB: IMetabase;

		    CrInfo: IMetabaseObjectCreateInfo;

		    Link: IMetabaseObject;

		    LinkInst: IMetabaseLinkInstance;

		    ObjDesc, ShortcutDesc: IMetabaseObjectDescriptor;

		Begin

		    MB := MetabaseClass.Active;

		    CrInfo := MB.CreateCreateInfo;

		    CrInfo.Id := "Shortcut_Report_1";

		    CrInfo.Name := "Ярлык для Report_1";

		    CrInfo.Parent := MB.Root;

		    CrInfo.Permanent := True;

		    Link := MB.ItemById("Link_Test").Bind;

		    LinkInst := Link.Open(Null) As IMetabaseLinkInstance;

		    ObjDesc := LinkInst.Metabase.ItemById("OBJTEST");

		    CrInfo.Link := Link As IMetabaseLink;

		    CrInfo.ClassId := ObjDesc.ClassId;

		    CrInfo.Shortcut := ObjDesc;

		    ShortcutDesc := MB.CreateObject(CrInfo);


	При выполнения примера в корневом каталоге репозитория будет создан
	 ярлык на объект из репозитория, на который настроена связь с репозиторием
	 «Link_Test».


## Редактирование объектов через ярлык


	Для редактирования объекта (описания объекта), на который ссылается
	 ярлык, получите описание ярлыка и вызовите метод [IMetabaseObjectDescriptor.Edit](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Edit.htm)
	 ([IMetabaseObjectDescriptor.EditDescriptor](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.EditDescriptor.htm)).
	 Результат метода приведите к необходимому интерфейсу и измените параметры/структуру
	 объекта. Например, если исходный объект является справочником НСИ,
	 то, используя ярлык на него, можно следующим образом изменить наименование
	 атрибута:


		Var

		    MB: IMetabase;

		    SHDesc: IMetabaseObjectDescriptor;

		    Dict: IRdsDictionary;

		Begin

		    MB := MetabaseClass.Active;

		    SHDesc := MB.ItemById("SHORTCUT_TO_DICTIONARY");

		    Dict := SHDesc.Edit As IRdsDictionary;

		    Dict.Attributes.FindById("COUNTRY").Name := Dict.Attributes.FindById("Страны мира").Name;

		    (Dict As IMetabaseObject).Save;


	Если ярлык ссылается на объект из другого репозитория, то редактирование
	 ярлыка не позволит изменить структуру (описание) объекта в виду имеющихся
	 особенностей реализации. Для изменения объекта необходимо получить
	 его описание, открыть на редактирование, внести необходимые изменения
	 и сохранить. Для этого можно воспользоваться следующим кодом:


		Sub Edit;

		Var

		    MB: IMetabase;

		    SHDesc, ObjDesc: IMetabaseObjectDescriptor;

		    Dict: IRdsDictionary;

		Begin

		    MB := MetabaseClass.Active;

		    SHDesc := MB.ItemById("SHORTCUT_TO_DICTIONARY");

		    ObjDesc := CheckShortcut(SHDesc);

		    Dict := ObjDesc.Edit As IRdsDictionary;

		    Dict.Attributes.FindById("COUNTRY").Name := Dict.Attributes.FindById("Страны мира").Name + "1";

		    (Dict As IMetabaseObject).Save;

		End Sub Edit;


		Function CheckShortcut(Desc: IMetabaseObjectDescriptor): IMetabaseObjectDescriptor;

		Var

		    Result: IMetabaseObjectDescriptor;

		Begin

		    //Если ярлык на объект из другого репозитория

		    If Desc.IsLink Then

		        Desc := Desc.Open(Null).Object;

		    End If;

		    //Если ярлык
		 на объект текущего репозитория, то рекурсивная проверка для
		 получения описания исходного объекта

		    If Desc.IsShortcut Then

		        Result := CheckShortcut(Desc.Shortcut);

		    Else

		        Result := Desc;

		    End If;

		    Return Result;

		End Function CheckShortcut;


	Функция CheckShortcut осуществляет
	 проверку является ли объект ярлыком и рекурсивно доходит до исходного
	 объекта. После этого она возвращает его описание. Данная функция также
	 подходит для использования, если возникают случаи, когда ярлык ссылается
	 на другой ярлык (из текущего или другого репозитория).


См. также:


[Примеры](Examples_main.htm)
 | [IMetabaseObjectDescriptor.IsShortcut](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsShortcut.htm)
 | [IMetabaseObjectDescriptor.IsLink](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
