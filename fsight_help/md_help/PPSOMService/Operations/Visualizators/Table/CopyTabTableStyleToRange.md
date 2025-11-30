# CopyTabTableStyleToRange: Операция

CopyTabTableStyleToRange: Операция
-


**


# CopyTabTableStyleToRange


## Синтаксис


bool CopyTabTableStyleToRange(string mon, string
 styleName)


## Параметры


mon. Моникёр
 для работы с диапазоном ячеек таблицы.


styleName. Наименование стиля,
 копию которого необходимо создать.


## Описание


Операция CopyTabTableStyleToRange
 копирует стиль и применяет копию к диапазону ячеек.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!адрес диапазона», а в поле styleName
 наименование стиля, копию которого необходимо создать.


Результатом выполнения операции будет логическое значение true,
 если копирование стиля и применение его копии к диапазону ячеек завершилось
 успешно.


## Пример


Ниже приведён пример копирования стиля и применения копии к заданному
 диапазону ячеек. В запросе передаётся моникёр диапазона ячеек и наименование
 копируемого стиля. В отвеет возвращается признак успешного применения
 копии стиля к диапазону ячеек.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<CopyTabTableStyleToRange xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">JMHNJCPPENOAGOAEKKAIOMBCNHKFGLBECJGOILNNKEBNHDNH!M!S!POMEOEHPPENOAGOAEHHAFJNMHPFBDKBJEDIHOKONCJJDDJEHC!Sheets!1!E0:G5</mon>  <styleName xmlns="****">EAX table style</styleName>  </CopyTabTableStyleToRange>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <CopyTabTableStyleToRangeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CopyTabTableStyleToRangeResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CopyTabTableStyleToRange" :
  {
   "mon" : "JMHNJCPPENOAGOAEKKAIOMBCNHKFGLBECJGOILNNKEBNHDNH!M!S!POMEOEHPPENOAGOAEHHAFJNMHPFBDKBJEDIHOKONCJJDDJEHC!Sheets!1!E0:G5",
   "styleName" : "EAX table style"
  }
}

### JSON-ответ:


{
 "CopyTabTableStyleToRangeResult" : "1"
}


public static bool CopyTabTableStyleToRange(string moniker, string sheetKey, string address, string copiedStyleName)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tCopy = new CopyTabTableStyleToRange()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address,
        styleName = copiedStyleName
    };
    // Копирование стиля и применение копии к диапазону ячеек
    var result = somClient.CopyTabTableStyleToRange(tCopy);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
