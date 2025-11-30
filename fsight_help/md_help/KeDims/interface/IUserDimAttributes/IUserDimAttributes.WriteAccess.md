# IUserDimAttributes.WriteAccess

IUserDimAttributes.WriteAccess
-


# IUserDimAttributes.WriteAccess


## Синтаксис


WriteAccess: [IUserDimAttribute](../IUserDimAttribute/IUserDimAttribute.htm);


## Описание


Свойство WriteAccess определяет
 атрибут справочника, ограничивающий права на изменение данных по этому
 элементу в OLAP.


## Комментарии


Если ограничение на запись не установлено, то свойство возвращает значение
 Null. При установленном ограничении
 на запись будут редактироваться только те записи, для которых значение
 атрибута соответствует 32-х битной маске безопасности.


## Пример


Для выполнения примера предполагается наличие вычисляемого справочника
 с идентификатором «USER_DIM».


Добавьте ссылки на системные сборки Metabase, Dimensions.


			Sub UserProc;

Var

    MB: IMetabase;

    UsDim: IUserDimension;

    UsDimAts: IUserDimAttributes;

    UsDimAttr: IUserDimAttribute;

    i: Integer;

Begin

    MB:=MetabaseClass.Active;

    UsDim:=MB.ItemById("USER_DIM").Bind As IUserDimension;

    UsDimAts:=UsDim.Attributes;

    UsDimAttr:=UsDimAts.WriteAccess;

    If UsDimAttr<>Null Then

        i:=UsDimAttr.Key;

        Debug.WriteLine(i);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен ключ атрибута,
 ограничивающего права на изменение записей, если он установлен.


См. также:


[IUserDimAttributes](IUserDimAttributes.htm)
 | [ISecurityLabels](KeSom.chm::/Interface/ISecurityLabels/ISecurityLabels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
