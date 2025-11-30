# IUserDimension.Attributes

IUserDimension.Attributes
-


# IUserDimension.Attributes


## Синтаксис


Attributes: [IUserDimAttributes](../IUserDimAttributes/IUserDimAttributes.htm);


## Описание


Свойство Attributes возвращает
 объект, содержащий коллекцию атрибутов справочника.


## Пример


Sub Main;


Var


MB: IMetabase;


UsDim: IUserDimension;


UsDimAtr: IUserDimAttributes;


i: Integer;


Begin


MB:=MetabaseClass.Active;


UsDim:=MB.ItemById("USER_DIM").Bind
 As IUserDimension;


UsDimAtr:=UsDim.Attributes;


i:=UsDimAtr.Count;


End Sub
 Main;


После выполнения примера в переменной «i» будет содержаться количество
 атрибутов вычисляемого справочника. Идентификатор справочника - «USER_DIM».


См. также:


[IUserDimension](IUserDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
