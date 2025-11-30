# IDimSelection.SaveElementDependencies

IDimSelection.SaveElementDependencies
-


# IDimSelection.SaveElementDependencies


## Синтаксис


SaveElementDependencies(Value: [IMbElementDependencies](KeSom.chm::/Interface/IMbElementDependencies/IMbElementDependencies.htm);
 [ObjectKey: Integer = -1]);


## Параметры


Value - зависимости, в список
 которых будут добавлены зависимости от элементов, имеющихся в отметке.


ObjectKey - ключ объекта, для
 которого необходимо установить зависимости. По умолчанию передается значение
 «-1», при этом ключ объекта должен быть задан в условии [Where](KeSom.chm::/Interface/IMbElementDependencies/IMbElementDependencies.Where.htm)
 сохраняемой коллекции зависимостей Value.


## Описание


Метод SaveElementDependencies
 осуществляет сохранение коллекции зависимостей от элементов, содержащихся
 в отметке.


## Комментарии


Данный метод актуален для отметки, полученной для справочников НСИ.
 Для справочника должна быть включена возможность отслеживания ссылок на
 элементы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента DimensionTree
 с наименованием «DimensionTree1» и какого-либо источника данных для «DimensionTree1».
 Источник данных подключен к справочнику НСИ, поддерживающему отслеживание
 ссылок на элементы. Также в репозитории имеется объект с идентификатором
 «Report_1», поддерживающий отслеживание зависимостей от элементов справочников
 НСИ.


			    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        MB: IMetabase;

        Sel: IDimSelection;

        Obj: IMetabaseObjectDescriptor;

        Depends: IMbElementDependencies;

    Begin

        MB := MetabaseClass.Active;

        Sel := DimensionTree1.Selection;

        Obj := MB.ItemById("Report_1");

        Depends := Obj.ElementDependencies;

        Sel.SaveElementDependencies(Depends);

        Depends.Database.Update(Depends);

    End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для объекта «Report_1»
 будет обновлен список зависимостей от элементов. В список зависимостей
 будут добавлены зависимости от элементов, отмеченных в компоненте «DimensionTree1».


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
