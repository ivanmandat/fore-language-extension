# RemoveTabTableStyle: Операция

RemoveTabTableStyle: Операция
-


**


# RemoveTabTableStyle


## Синтаксис


bool RemTabTableStyle(string mon)


## Параметры


mon. Моникёр
 для работы со стилями оформления выбранной области.


## Описание


Операция RemoveTabTableStyle
 удаляет стили, применённые к выбранной области.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр для работы со стилями. Моникёр указывается в одном из следующих
 форматов:


	- «Моникёр экземпляра рег.отчёта!Sheets!Ключ
	 листа!TableStyles» - для работы со стилями листа;


	- «Моникёр экземпляра рег.отчёта!Sheets!Ключ
	 листа!абсолютный адрес!TableStyles» - для работы со стилями
	 диапазона ячеек. Абсолютный адрес может быть указан в различных форматах,
	 которые предусмотрены для ячеек, например,: A5, A5:D10, R5C3, C:C,
	 43:43.


Результатом операции будет логическое значение true,
 если удаление стилей завершились успешно.


## Пример


Ниже приведён пример удаления стилей, которые применены для диапазона
 ячеек. В запросе передаётся моникёр для работы со стилями определённого
 диапазона ячеек. В ответе возвращается признак успешного удаления стилей.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<RemoveTabTableStyle xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">JMHNJCPPENOAGOAEKKAIOMBCNHKFGLBECJGOILNNKEBNHDNH!M!S!POMEOEHPPENOAGOAEHHAFJNMHPFBDKBJEDIHOKONCJJDDJEHC!Sheets!1!A0:D5!TableStyles</mon>  </RemoveTabTableStyle>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <RemoveTabTableStyleResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</RemoveTabTableStyleResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "RemoveTabTableStyle" :
  {
   "mon" : "JMHNJCPPENOAGOAEKKAIOMBCNHKFGLBECJGOILNNKEBNHDNH!M!S!POMEOEHPPENOAGOAEHHAFJNMHPFBDKBJEDIHOKONCJJDDJEHC!Sheets!1!A0:D5!TableStyles"
  }
}

### JSON-ответ:


{
 "RemoveTabTableStyleResult" : "1"
}


public static bool RemoveTabTableStyle(string moniker, string sheetKey, string address)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tDel = new RemoveTabTableStyle()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address + "!TableStyles"
    };
    // Удаление стилей
    var result = somClient.RemoveTabTableStyle(tDel);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
