# IMetaAttributesBreadcrumb.ExtendedRootItem

IMetaAttributesBreadcrumb.ExtendedRootItem
-


# IMetaAttributesBreadcrumb.ExtendedRootItem


## Синтаксис


ExtendedRootItem: Boolean;


## Описание


Свойство ExtendedRootItem определяет
 признак отображения в компоненте объединенного элемента.


## Комментарии


Если свойству установлено значение True,
 то будет отображен объединенный элемент. Объединенный элемент включает
 в себя кнопку очистки цепочки навигации и дополнительную кнопку, текст
 которой указывается в свойстве [RootText](IMetaAttributesBreadcrumb.RootText.htm).
 В свойстве [RootHint](IMetaAttributesBreadcrumb.RootHint.htm)
 можно задать текст всплывающей подсказки для дополнительной кнопки. При
 щелчке по дополнительной кнопке для компонента будет сгенерировано событие
 [OnRootClick](../../Class/MetaAttributesBreadcrumb/MetaAttributesBreadcrumb.OnRootClick.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента MetaAttributesBreadcrumb с наименованием «MetaAttributesBreadcrumb1»
 и компонента MetabaseOpenDialog с наименованием «MetabaseOpenDialog1».
 Для компонента «MetabaseOpenDialog1» задан фильтр для возможности выбора
 только баз данных временных рядов. В репозитории имеется база данных временных
 рядов с идентификатором «FC».


	Class TESTForm: Form

	    MetaAttributesBreadcrumb1: MetaAttributesBreadcrumb;

	    MetabaseOpenDialog1: MetabaseOpenDialog;


	    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

	    Var

	        MB: IMetabase;

	        MDesc: IMetabaseObjectDescriptor;

	    Begin

	        MB := MetabaseClass.Active;

	        MDesc := MB.ItemById("FC");

	        MetaAttributesBreadcrumb1.Rubricator := MDesc.Open(Null) As IRubricatorInstance;

	        MetaAttributesBreadcrumb1.ExtendedRootItem := True;

	        MetaAttributesBreadcrumb1.RootText := "База: " + MDesc.Name;

	        MetaAttributesBreadcrumb1.RootHint := MDesc.Name;

	    End Sub TESTFormOnCreate;


	    Sub MetaAttributesBreadcrumb1OnRootClick(Sender: Object; Args: IBreadcrumbItemEventArgs);

	    Var

	        MDesc: IMetabaseObjectDescriptor;

	    Begin

	        If MetabaseOpenDialog1.Execute(Self) Then

	            MDesc := MetabaseOpenDialog1.Object;

	            MetaAttributesBreadcrumb1.Rubricator := MDesc.Open(Null) As IRubricatorInstance;

	            MetaAttributesBreadcrumb1.RootText := "База: " + MDesc.Name;

	            MetaAttributesBreadcrumb1.RootHint := MDesc.Name;

	        End If;

	    End Sub MetaAttributesBreadcrumb1OnRootClick;


	End Class TESTForm;


При запуске формы компонент «MetaAttributesBreadcrumb1» будет подключен
 к указанной базе данных временных рядов. Также в компоненте будет отображен
 корневой элемент. В тексте элемента будет указано наименование базы данных
 временных рядов. При щелчке по корневому элементу будет отображен диалог
 выбора базы данных временных рядов из репозитория. Выбранная база будет
 подключена к компоненту «MetaAttributesBreadcrumb1».


См. также:


[IMetaAttributesBreadcrumb](IMetaAttributesBreadcrumb.htm)
 | [IMetaAttributesBreadcrum](IMetaAttributesBreadcrumb.RootText.htm)[b.RootText](IMetaAttributesBreadcrumb.RootHint.htm)
 | [IMetaAttributesBreadcrumb.RootHint](IMetaAttributesBreadcrumb.RootHint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
