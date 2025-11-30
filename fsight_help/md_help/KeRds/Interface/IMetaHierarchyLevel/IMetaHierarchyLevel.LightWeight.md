# IMetaHierarchyLevel.LightWeight

IMetaHierarchyLevel.LightWeight
-


# IMetaHierarchyLevel.LightWeight


## Синтаксис


LightWeight: Boolean;


## Описание


Свойство LightWeight определяет,
 выполняется ли запрос на получение дочерних элементов уровня иерархии.


## Комментарии


Свойство не применяется для листьевых уровней иерархии и для составных
 справочников.


Если LightWeight = True, то
 запрос на получение дочерних элементов уровня иерархии не выполняется,
 для элемента иерархии свойство Count
 возвращает значение «-2».


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 MetaAttributesTreeList с идентификатором
 «MetaAttributesTreeList1» и кнопки с идентификатором «Button1». MetaAttributesTreeList должен отображать
 данные какого-либо справочника. Добавьте ссылку на системную сборку «Rds».


Пример является обработчиком события OnClick
 для кнопки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Dict: IMetaDictionary;

    i: Integer;

    Hierarchy: IMetaHierarchy;

    HLevels: IMetaHierarchyLevels;

    HLev: IMetaHierarchyLevel;

Begin

    Dict := MetaAttributesTreeList1.Dictionary;

    If Not Dict.IsCompound Then

        Hierarchy := Dict.DefaultHierarchy;

        HLevels := Hierarchy.Levels;

        For i := 0 To HLevels.Count - 1 Do

            HLev := HLevels.Item(i);

            Debug.WriteLine("Уровень " + i.ToString + " : " + HLev.Name);

            If HLev.LightWeight Then

                Debug.WriteLine("  Используется динамическая загрузка данных");

            Else

                Debug.WriteLine("  Динамическая загрузка данных не используется");

            End If;

        End For;

    End If;

End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведена информация о
 способе загрузке элементов справочника, отображаемого в компоненте «MetaAttributesTreeList1».


См. также:


[IMetaHierarchyLevel](IMetaHierarchyLevel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
