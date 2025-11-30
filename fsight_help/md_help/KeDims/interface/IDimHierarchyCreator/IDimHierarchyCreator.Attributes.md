# IDimHierarchyCreator.Attributes

IDimHierarchyCreator.Attributes
-


# IDimHierarchyCreator.Attributes


## Синтаксис


Attributes: Array;


## Описание


Свойство Attributes определяет
 массив атрибутов элемента, по которым осуществляется группировка.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 с идентификатором DIC.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    mb:IMetabase;

    diminst:IDimInstance;

    sel,sel_gr:IDimSelection;

    creator: IDimHierarchyCreator;

    ar: Array Of integer;

    h_inst:IDimHierarchyInstance;

Begin

    // Получим репозиторий

    mb:=metabaseclass.Active;

    // Откроем справочник

    diminst:=mb.ItemById("DIC").Open(Null) As IDimInstance;

    // Получим отметку

    sel:=diminst.CreateSelection;

    sel.SelectElement(1, False);

    sel.SelectElement(2, False);

    // Выведем отмеченные элементы

    debug.WriteLine(sel.ToString);

    // Создадим динамически альтернативную иерархию

    creator := New DimHierarchyCreator.Create;

    // Создадим массив,
 куда поместим ключ атрибутов, по которому выполняется группировка

    ar:= New integer[1];

    ar[0]:=1;

    creator.Selection := sel;

   // Передаем атрибут, по которому выполняется группировка

    creator.Attributes:=ar;

    // Получаем группировочное измерение

    h_inst:=creator.HierarchyInstance;

    sel_gr:=h_inst.Source.CreateSelection;

    sel_gr.SelectAll;

    // Выведем все элементы группировочной иерархии

    debug.WriteLine(sel_gr.ToString);

End Sub UserProc;


В результате выполнения примера в консоли будут выведены все элементы
 альтернативной иерархии cо значением атрибута, по которому выполнялась
 группировка.


См. также:


[IDimHierarchyCreator](IDimHierarchyCreator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
