# ICustomDimension.HideInaccessibleElements

ICustomDimension.HideInaccessibleElements
-


# ICustomDimension.HideInaccessibleElements


## Синтаксис


HideInaccessibleElements: Boolean;


## Описание


Свойство HideInaccessibleElements
 определяет, будут ли скрываться недоступные элементы.


## Комментарии


Данное свойство актуально, если для измерения установлены атрибуты [ReadAccess](../ICustomDimAttributes/ICustomDimAttributes.ReadAccess.htm)
 и [WriteAccess](../ICustomDimAttributes/ICustomDimAttributes.WriteAccess.htm).


Если свойству HideInaccessibleElements
 установлено значение True (значение
 по умолчанию), то при построении будет осуществляться проверка соответствия
 битовой метки безопасности текущего пользователя и маски безопасности,
 содержащейся в значениях атрибутов [ReadAccess](../ICustomDimAttributes/ICustomDimAttributes.ReadAccess.htm)
 и [WriteAccess](../ICustomDimAttributes/ICustomDimAttributes.WriteAccess.htm).
 Элементы, для которых значение маски безопасности не содержит метку безопасности
 пользователя, будут скрыты либо запрещены для редактирования.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Cube: IStandardCube;

	    CustDim: ICustomDimension;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("STD_CUBE").Edit;

	    Cube := MObj As IStandardCube;

	    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

	    CustDim.HideInaccessibleElements := False;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для измерения фактов будет включено отображение
 скрытых элементов.


См. также:


[ICustomDimension](ICustomDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
