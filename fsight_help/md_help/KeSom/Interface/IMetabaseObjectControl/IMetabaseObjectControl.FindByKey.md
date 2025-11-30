# IMetabaseObjectControl.FindByKey

IMetabaseObjectControl.FindByKey
-


# IMetabaseObjectControl.FindByKey


## Синтаксис


FindByKey(ParamKey: Integer): [IMetabaseObjectParamControl](../IMetabaseObjectParamControl/IMetabaseObjectParamControl.htm);


## Параметры


ParamKey.
 Ключ параметра вложенного объекта.


## Описание


Метод FindByKey осуществляет
 поиск и возвращает привязку параметра вложенного объекта к параметрам
 текущего объекта.


## Комментарии


Каждый объект имеет собственный диапазон ключей для параметров. Ключи
 начинаются с единицы.


Если во вложенном объекте отсутствует параметр с указанным ключом, то
 метод возвращает значение Null.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «STD_CUBE». Данный куб имеет в своей структуре измерение, которое построено
 на параметрическом справочнике «COUNTRY». Справочник имеет не менее двух
 параметров. В кубе создан один параметр. Добавьте ссылку на системную
 сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Params: IMetabaseObjectParams;

    ControlInfo: IMetabaseObjectControlInfo;

    Control: IMetabaseObjectControl;

    Param: IMetabaseObjectParamControl;

Begin

    MB := MetabaseClass.Active;

    MObj := Mb.ItemById("STD_CUBE").Edit;

    //Параметры самого куба

    Params := MObj.Params;

    ControlInfo := Params.ControlInfo;

    Control := ControlInfo.FindByKey(MB.GetObjectKeyById("COUNTRY"));

    //Привязка параметров вложенного объекта

    Param := Control.FindByKey(1);

    Param.Expression.AsString := "2000";

    Param := Control.FindByKey(2);

    Param.Expression.AsString := ':' + Params.FindByKey(1).Id + "+2000";

    MObj.Save;

End Sub UserProc;


При выполнении примера будет осуществлена настройка управления параметрами
 для указанного справочника: в качестве значения первого параметра будет
 передаваться фиксированное значение; значение второго параметра будет
 вычисляться по формуле и зависеть от указываемого значения параметра куба.


См. также:


[IMetabaseObjectControl](IMetabaseObjectControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
