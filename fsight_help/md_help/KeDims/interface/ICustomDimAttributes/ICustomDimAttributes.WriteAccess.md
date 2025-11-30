# ICustomDimAttributes.WriteAccess

ICustomDimAttributes.WriteAccess
-


# ICustomDimAttributes.WriteAccess


## Синтаксис


WriteAccess: [ICustomDimAttribute](../ICustomDimAttribute/ICustomDimAttribute.htm);


## Описание


Свойство WriteAccess определяет
 атрибут, который используется для ограничения прав на изменение значений
 по определенным элементам.


## Комментарии


Если ограничение на запись не установлено, то свойство возвращает значение
 Null. При установленном ограничении
 на запись будут редактироваться только те записи, для которых значение
 атрибута соответствует 32-х битной маске безопасности.


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 «CUBE».


Добавьте ссылки на системные сборки Metabase, Cubes, Dimensions.


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: IStandardCube;

    CustDim: ICustomDimension;

    CustAtrs: ICustomDimAttributes;

    CustAtribut: ICustomDimAttribute;

    i: Integer;

Begin

    MB:=MetabaseClass.Active;

    Cube:=MB.ItemById("CUBE").Bind As IStandardCube;

    CustDim:=Cube.FactDimension.Dimension As ICustomDimension;

    CustAtrs:=CustDim.Attributes;

    CustAtribut:=CustAtrs.WriteAccess;

    If CustAtribut<>Null Then

        i:=CustAtribut.Key;

        Debug.WriteLine(i);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен ключ атрибута,
 ограничивающего права на изменение записей, если он установлен.


См. также:


[ICustomDimAttributes](ICustomDimAttributes.htm)
 | [ISecurityLabels](KeSom.chm::/Interface/ISecurityLabels/ISecurityLabels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
