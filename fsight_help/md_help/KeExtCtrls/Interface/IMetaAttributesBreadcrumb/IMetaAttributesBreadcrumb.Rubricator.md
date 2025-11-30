# IMetaAttributesBreadcrumb.Rubricator

IMetaAttributesBreadcrumb.Rubricator
-


# IMetaAttributesBreadcrumb.Rubricator


## Синтаксис


Rubricator: [IRubricatorInstance](KeCubes.chm::/Interface/IRubricatorInstance/IRubricatorInstance.htm);


## Описание


Свойство Rubricator определяет
 базу данных временных рядов, данные которой будут отображаться в компоненте
 [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки и компонента MetaAttributesBreadcrumb с наименованием «MetaAttributesBreadcrumb1».
 В репозитории содержится база данных временных рядов с идентификатором
 OBJ_FC.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    RubInst: IRubricatorInstance;

	Begin

	    MB := MEtabaseClass.Active;

	    RubInst := MB.ItemById("OBJ_FC").Open(Null) As IRubricatorInstance;

	    MetaAttributesBreadcrumb1.Rubricator := RubInst;

	    MetaAttributesBreadcrumb1.MetaAttributes := RubInst.Facts.Dictionary.Attributes;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку компонент «MetaAttributesBreadcrumb1»
 будет подключен к базе данных временных рядов. В компоненте будут отображаться
 атрибуты, содержащие показатели базы данных временных рядов.


См. также:


[IMetaAttributesBreadcrumb](IMetaAttributesBreadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
