# IMetabaseClass.GetMetabaseObjectClass

IMetabaseClass.GetMetabaseObjectClass
-


# IMetabaseClass.GetMetabaseObjectClass


## Синтаксис


GetMetabaseObjectClass(ClassId: Integer): [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm);


## Параметры


ClassId - числовой идентификатор
 класса.


## Описание


Метод GetMetabaseObjectClass
 возвращает класс объекта, реализуемый перечислимым типом [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm),
 по числовому значению идентификатора класса.


## Комментарии


Данный метод используется, если необходимо работать с классом объекта
 как с объектом типа [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm),
 но доступен только числовой идентификатор класса, например, как в случае
 с пользовательскими классами.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента MetabaseOpenDialog с наименованием
 MetabaseOpenDialog1. В контейнере пользовательских классов объекта созданы
 классы с идентификаторами MyClass1 и MyClass2.


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        MB: IMetabase;

	        CustExtender: IMetabaseCustomExtender;

	        Classes: IMetabaseCustomClasses;

	        ClassFilter1, ClassFilter2: IMetabaseDialogClassFilter;

	        CombiFilter: IMetabaseDialogCombiFilter;

	    Begin

	        MB := MetabaseClass.Active;

	        //Получаем контейнер пользовательских классов

	        CustExtender := MB.SpecialObject(MetabaseSpecialObject.CustomExtender).Bind As IMetabaseCustomExtender;

	        //Получаем список пользовательских классов

	        Classes := CustExtender.Classes;

	        //Создаем фильтры по классам объектов

	        ClassFilter1 := New MetabaseDialogClassFilter.Create;

	        ClassFilter2 := New MetabaseDialogClassFilter.Create;

	        //Комбинированный фильтр

	        CombiFilter := New MetabaseDialogCombiFilter.Create;

	        //Установка классов фильтруемых объектов

	        ClassFilter1.ObjectClass :=

	            MetabaseClass.GetMetabaseObjectClass(Classes.FindById("MyClass1").ClassId);

	        ClassFilter2.ObjectClass :=

	            MetabaseClass.GetMetabaseObjectClass(Classes.FindById("MyClass2").ClassId);

	        //Объединение в комбинированный фильтр

	        CombiFilter.Filters.AddFilter(ClassFilter1);

	        CombiFilter.Filters.AddFilter(ClassFilter2);

	        //Подключение фильтра в компоненте

	        MetabaseOpenDialog1.Filters.AddFilter(CombiFilter);

	        MetabaseOpenDialog1.Execute(Self);

	    End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для компонента «MetabaseOpenDialog1»
 будет установлен комбинированный фильтр по классам объектов. Комбинированный
 фильтр включает в себя два фильтра по пользовательским классам объектов.
 Для указания пользовательского класса в фильтре используется метод GetMetabaseObjectClass.
 После инициализации диалога для выбора будут доступны только объекты указанных
 пользовательских классов.


См. также:


[IMetabaseClass](IMetabaseClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
