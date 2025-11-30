# AddTabTableStyle: Операция

AddTabTableStyle: Операция
-


**


# AddTabTableStyle


## Синтаксис


bool AddTabTableStyle(string mon, TabTableStyle
 tArg)


## Параметры


mon. Моникёр
 для работы со стилями оформления выбранной области.


tArg.
 Параметры добавления стиля.


## Описание


Операция AddTabTableStyle добавляет стандартный стиль в коллекцию
 с применением к выбранной области.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр для работы со стилями, а в поле tArg
 параметры добавления стиля. Моникёр указывается в одном из следующих форматов:


	- «Моникёр
	 экземпляра рег.отчёта!Sheets!Ключ листа!TableStyles» - для
	 работы со стилями листа;


	- «Моникёр
	 экземпляра рег.отчёта!Sheets!Ключ листа!абсолютный адрес!TableStyles»
	 - для работы со стилями диапазона ячеек. Абсолютный адрес может быть
	 указан в различных форматах, которые предусмотрены для ячеек, например,:
	 A5, A5:D10, R5C3, C:C, 43:43.


Результатом операции будет логическое
 значение true, если добавление
 и применение стиля завершились успешно.


## Пример


Ниже приведён пример добавления и применения стандартного стиля для
 диапазона ячеек. В запросе передаётся моникёр для работы со стилями определённого
 диапазона ячеек и добавляемый стиль. В ответе возвращается признак успешного
 добавления стиля.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<AddTabTableStyle xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">HKJBPOFGHFLNFOAEPCMMOLCIPENIILFEJLJPJINGDHAMFJHO!M!S!PKIBJJDGGHFLNFOAELFBDMPPAAHADDJBECIFBLMKKFMCDJAFG!Sheets!1!A0:D5!TableStyles</mon>[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <Name />
  <PredefinedStyle>ExtGreenStriped</PredefinedStyle>  </tArg>
  </AddTabTableStyle>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <AddTabTableStyleResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</AddTabTableStyleResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "AddTabTableStyle" :
  {
   "mon" : "HKJBPOFGHFLNFOAEPCMMOLCIPENIILFEJLJPJINGDHAMFJHO!M!S!PKIBJJDGGHFLNFOAELFBDMPPAAHADDJBECIFBLMKKFMCDJAFG!Sheets!1!A0:D5!TableStyles",
   "tArg" :
    {
     "Name" : "",
     "PredefinedStyle" : "ExtGreenStriped"
    }
  }
}

### JSON-ответ:


{
 "AddTabTableStyleResult" : "1"
}


public static bool AddTabTableStyle(string moniker, string sheetKey, string address)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tAdd = new AddTabTableStyle()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address + "!TableStyles",
        tArg = new TabTableStyle()
        {
            Name = string.Empty,
            PredefinedStyle = TabTablePredefinedStyle.ExtGreenStriped
        }
    };
    // Добавление предопределённого стиля
    var result = somClient.AddTabTableStyle(tAdd);
    return result;
}


См. также:


[Таблица: Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
