# IMetaAttributesEdit.RevisionsDimension

IMetaAttributesEdit.RevisionsDimension
-


# IMetaAttributesEdit.RevisionsDimension


## Синтаксис


RevisionsDimension: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Описание


Свойство RevisionsDimension
 определяет справочник ревизий, из которого осуществляется загрузка данных
 по атрибуту «Ревизия» в подстановки компонента.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента MetaAttributesEdit с
 наименованием «MetaAttributesEdit1». В репозитории имеется база данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Rub: IRubricator;

	    RubInst: IRubricatorInstance;

	Begin

	    MB := MetabaseClass.Active;

	    Rub := MB.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

	    RubInst := (Rub As IMetabaseObject).Open(Null) As IRubricatorInstance;

	    MetaAttributesEdit1.AddAttribute(Rub.Facts.Attributes.FindById("REV"));

	    MetaAttributesEdit1.RevisionsDimension := RubInst.RevisionsDimension(-2);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в список подстановок
 компонента «MetaAttributesEdit1» будут включены все ревизии и метки, имеющиеся
 в базе данных временных рядов.


См. также:


[IMetaAttributesEdit](IMetaAttributesEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
