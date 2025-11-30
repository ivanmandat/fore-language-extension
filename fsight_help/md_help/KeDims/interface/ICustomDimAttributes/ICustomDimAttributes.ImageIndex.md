# ICustomDimAttributes.ImageIndex

ICustomDimAttributes.ImageIndex
-


# ICustomDimAttributes.ImageIndex


## Синтаксис


ImageIndex: [ICustomDimAttribute](../ICustomDimAttribute/ICustomDimAttribute.htm);


## Описание


Свойство ImageIndex определяет
 атрибут с назначением «Пиктограмма элементов».


## Комментарии


Данное свойство актуально, если для репозитория установлен документ,
 содержащий [значки
 элементов справочника](UiNav.chm::/02_Navigator/Repo_Default.htm). Если в свойстве ImageIndex
 задан атрибут, то около наименования элементов будет выводиться изображение.
 Индекс изображения соответствует значению по данному атрибуту.


В качестве значения свойства ImageIndex
 может быть указан только целочисленный атрибут справочника.


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 "CUBE_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Cube: IStandardCube;

	    CustDim: ICustomDimension;

	    CustAttrs: ICustomDimAttributes;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CUBE_1").Edit;

	    Cube := MObj As IStandardCube;

	    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

	    CustAttrs := CustDim.Attributes;

	    CustAttrs.ImageIndex := CustAttrs.Id;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в измерении фактов куба, для управления отображаемыми
 пиктограммами, будет использоваться атрибут Идентификатор.


См. также:


[ICustomDimAttributes](ICustomDimAttributes.htm)
 |[Значки
 элементов справочника по умолчанию](UiNav.chm::/02_Navigator/Repo_Default.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
