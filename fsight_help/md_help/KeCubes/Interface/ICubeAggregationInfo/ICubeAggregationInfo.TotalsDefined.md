# ICubeAggregationInfo.TotalsDefined

ICubeAggregationInfo.TotalsDefined
-


# ICubeAggregationInfo.TotalsDefined


## Синтаксис


TotalsDefined: Boolean;


## Описание


Свойство TotalsDefined возвращает
 признак наличия настроек для агрегации данных на сервере.


## Комментарии


Свойство возвращает значение True,
 если для фактов куба настроена серверная агрегация. Для агрегации используется
 любой метод, кроме Count и CountDistinct. Если для фактов куба серверная
 агрегация не настроена ([AggregationType](../IStandardCubeFactBinding/IStandardCubeFactBinding.AggregationType.htm)
 = CubeFactBindingAggregationType.None), либо используется метод расчета
 Count или CountDistinct (при данных методах агрегации расчет производится
 на компьютере-клиенте), то метод вернет значение False.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 Cube_1.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICubeInstance;

    AggrInfo: ICubeAggregationInfo;

Begin

    MB := MetabaseClass.Active;

    CubeInst := MB.ItemById("Cube_1").Open(Null) As ICubeInstance;

    AggrInfo := CubeInst As ICubeAggregationInfo;

    If AggrInfo.TotalsDefined Then

        Debug.WriteLine("Имеются настройки для агрегации данных на сервере");

    Else

        Debug.WriteLine("Не имеются настройки для агрегации данных на сервере");

    End If;

End Sub UserProc;


После выполнения примера будет осуществлено открытие куба. Если в кубе
 имеются настройки для агрегации данных на сервере, то в консоль среды
 разработки будет выведено соответствующее сообщение.


См. также:


[ICubeAggregationInfo](ICubeAggregationInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
