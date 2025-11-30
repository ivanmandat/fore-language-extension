# ISmx12arima.TradingDayEffects

ISmx12arima.TradingDayEffects
-


# ISmx12arima.TradingDayEffects


## Синтаксис


TradingDayEffects: [TradingDayEffectsX12Type](../../Enums/TradingDayEffectsX12Type.htm);


## Описание


Свойство TradingDayEffects определяет
 тип поправок на рабочие дни.


## Комментарии


Значение по умолчанию TradingDayEffectsX12Type.None.


Для определения количества дней, рассматриваемых для получения поправки
 на рабочие дни, используйте свойство [ISmx12arima.TdstockValue](ISmx12arima.TdstockValue.htm).


Для показателей потока используются типы TradingDayEffectsX12Type.Td
 и TradingDayEffectsX12Type.Td1coef,
 для показателей объема - TradingDayEffectsX12Type.TdStock.
 Если TradingDayEffects = TradingDayEffectsX12Type.TdStock,
 то должно быть задано свойство [ISmx12arima.TdstockValue](ISmx12arima.TdstockValue.htm).


## Пример


Использование свойства приведено в примере для [ISmx12arima.OutliersARIMAao](ISmx12arima.OutliersARIMAao.htm).


См. также:


[ISmx12arima](ISmx12arima.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
