# IRubricatorInstance.Clear

IRubricatorInstance.Clear
-


# IRubricatorInstance.Clear


## Синтаксис


Clear(Mode: [CubeLoadClearMode](../../Enums/CubeLoadClearMode.htm);
 Lookup: [IRubricatorDictionaryLookup](../IRubricatorDictionaryLookup/IRubricatorDictionaryLookup.htm);
 FactsAttrs: String; ValuesAttrs: String);


## Параметры


Mode. Режим очистки базы данных
 временных рядов;


Lookup. Параметры отбора очищаемых
 рядов;


FactsAttrs. Список атрибутов
 рядов, значения которых будут очищены для отобранных рядов;


ValuesAttrs. Список атрибутов
 наблюдения, значения которых будут очищены для отобранных рядов.


## Описание


Метод Clear осуществляет очистку
 рядов в базе данных временных рядов в соответствии с указанными параметрами.


## Комментарии


В качестве значения параметра Mode
 необходимо указать какое-либо значение, кроме [CubeLoadClearMode.Default_](../../Enums/CubeLoadClearMode.htm).
 Очистка в выбранном режиме производится для рядов, которые будут отобраны
 в соответствии с условиями, заданными в параметре Lookup.
 При очистке метаданных рядов в параметрах FactsAttrs
 и ValuesAttrs необходимо указать
 идентификаторы атрибутов рядов и наблюдений, значения которых будут сброшены.
 Идентификаторы в списках разделяются символом «;».
 Если необходимо сбросить значения всех атрибутов то укажите в требуемом
 списке символ «*».


При работе метода осуществляется проверка на возможность сбросить значение
 по атрибуту. Если какой-либо атрибут не может иметь пустые значения, то
 его значения сброшены не будут.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «OBJ_RUBRICATOR». В список атрибутов
 показателей включены три дополнительных атрибута: «COUNTRY», «ATTR1» и
 «ATTR2».


			Sub UserProc;

Var

    MB: IMetabase;

    RubInstance: IRubricatorInstance;

    Lookup: IRubricatorFactsLookup;

    MetaDLookup: IMetaDictionaryLookup;

    Cond: IOrmCondition;

Begin

    MB := MetabaseClass.Active;

    RubInstance := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    Lookup := RubInstance.CreateFactsLookup;

    MetaDLookup := Lookup.Lookup;

    Cond := MetaDLookup.Where.Add;

    Cond.AttributeName := "COUNTRY";

    Cond.Value := 512;

    RubInstance.Clear(CubeLoadClearMode.MetadataOnly, Lookup, "ATTR1; ATTR2", "*");

End Sub UserProc;


При выполнении примера будет произведена очистка метаданных рядов указанной
 базы данных временных рядов: для всех рядов, у которых значение атрибута
 «COUNTRY» равно «512» будут сброшены атрибуты показателей «ATTR1» и «ATTR2»,
 а также все атрибуты наблюдений.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
