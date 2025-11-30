# IFactorTreeListNode.Member

IFactorTreeListNode.Member
-


# IFactorTreeListNode.Member


## Синтаксис


Member: [IMetaMemberLeaf](KeRds.chm::/Interface/IMetaMemberLeaf/IMetaMemberLeaf.htm);


## Описание


Свойство Member возвращает параметры
 показателя, которому соответствует элемент компонента [MetaAttributesTreeList](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesTreeList.htm).


## Пример


Для выполнения примера разместите на форме компонент Button, MetaAttributesBreadcrumb,
 MetaAttributesTreeList, LanerBox и UiErAnalyzer с наименованиями «Button1»,
 «MetaAttributesBreadcrumb1», «MetaAttributesTreeList1», «LanerBox1» и
 «UiErAnalyzer1» соответственно. В качестве источника данных для «LanerBox1»
 укажите «UiErAnalyzer1» в свойстве Object. Источником данных для «UiErAnalyzer1»
 является рабочая книга, заданная в свойстве Object. Также для «UiErAnalyzer1»
 установите свойству Active значение True.
 В качестве цепочки навигации по временным рядам для «MetaAttributesTreeList1»
 укажите «MetaAttributesBreadcrumb1» в свойстве Breadcrumb.


Добавьте ссылки на системные сборки: Cubes, Express, ExtCtrls, Forms,
 Laner, Rds.


Пример является обработчиком события OnShow для формы и OnClick для
 компонента «Button1».


	Sub IFACTORTREELISTNODE_MEMBERFormOnShow(Sender: Object; Args: IEventArgs);

	Var

	    Laner: ILaner;

	Begin

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    MetaAttributesBreadcrumb1.Rubricator := Laner.RubricatorInstance;

	End Sub IFACTORTREELISTNODE_MEMBERFormOnShow;

	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    RubInst: IRubricatorInstance;

	    Item: IMetaAttributesTreeListNode;

	    Fact: IFactorTreeListNode;

	    Laner: ILaner;

	Begin

	    RubInst := MetaAttributesBreadcrumb1.Rubricator;

	    Item := MetaAttributesTreeList1.Selected As IMetaAttributesTreeListNode;

	    If Item.Type = MetaAttributesNodeType.FactorNode Then

	        Fact := Item As IFactorTreeListNode;

	        Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	        Laner.Series.AddCalculateSerieAsSource(RubInst.GetFactData(Fact.Member.Key).Factor);

	    End If;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в компоненте «LanerBox1»
 будет добавлен новый ряд, если в компоненте «MetaAttributesTreeList1»
 выделен показатель. В этом ряду будут содержаться данные выделенного показателя.


См. также:


[IFactorTreeListNode](IFactorTreeListNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
