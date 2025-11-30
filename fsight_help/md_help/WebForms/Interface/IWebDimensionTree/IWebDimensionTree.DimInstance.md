# IWebDimensionTree.DimInstance

IWebDimensionTree.DimInstance
-


# IWebDimensionTree.DimInstance


## Синтаксис


DimInstance: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Описание


Свойство DimInstance определяет
 данные справочника, которые необходимо отобразить в компоненте.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 с идентификатором DICT_1. Также предполагается наличие веб-формы и расположенного
 на ней компонента DimensionTree с наименованием DimensionTree1. Указанная
 процедура установлена в качестве обработчика события OnShow для веб-формы.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


Sub TESTWebFormOnShow;

Var

    Mb: IMetabase;

    Dim: IDimInstance;

    Sel: IDimSelection;

Begin

    Mb := MetabaseClass.Active;

    // Открытие справочника

    Dim := Mb.ItemById("DICT_1").Open(Null) As IDimInstance;

    // Создание отметки

    Sel := Dim.CreateSelection;

    Sel.SelectElement(2, False);

    Sel.SelectElement(4, False);

    Sel.SelectElement(6, False);

    // Подключение справочника к компоненту

    DimensionTree1.DimInstance := Dim;

    DimensionTree1.Selection := Sel;

End Sub TESTWebFormOnShow;


При запуске веб-формы к компоненту DimensionTree1 будет подключен указанный
 справочник. Среди элементов будут выделены три элемента.


См. также:


[IWebDimensionTree](IWebDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
