# DashboardSlidesAdd: Операция

DashboardSlidesAdd: Операция
-


**


# DashboardSlidesAdd


## Синтаксис


DashboardSlide DashboardSlidesAdd(string mon, DashboardSlide
 tArg)


## Параметры


mon. Моникёр
 для работы со слайдами информационной панели.


tArg. Настройки нового слайда.


## Описание


Операция DashboardSlidesAdd
 создаёт новый слайд.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Slides», а в поле tArg
 настройки нового слайда. Моникёр может быть получен при выполнении операции
 [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет информация о созданном слайде.


## Пример


Ниже приведён пример создания нового слайда в информационной панели.
 В запросе передаётся моникёр для работы со слайдами и наименование нового
 слайда. В ответ возвращается информация о созданном слайде.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardSlidesAdd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NPIEIDPOHJAFGOAELKELIPCKGACGDODEJKMKLMAKBEHEPNNL!M!S!PNNJOPHPOHJAFGOAEICILHADAKIJGHMLEMLEPKLENIMMHAMNE!Slides</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>-1</k>  <name>Новый слайд</name>  <visible>true</visible>  </tArg>
  </DashboardSlidesAdd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<DashboardSlidesAddResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">3</k>  <title xmlns="****">Новый слайд</title>  <useSync xmlns="****">0</useSync>  <useSelectionSync xmlns="****">0</useSelectionSync>  <name xmlns="****">Новый слайд</name>  <visible xmlns="****">1</visible>  </DashboardSlidesAddResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardSlidesAdd" :
  {
   "mon" : "NPIEIDPOHJAFGOAELKELIPCKGACGDODEJKMKLMAKBEHEPNNL!M!S!PNNJOPHPOHJAFGOAEICILHADAKIJGHMLEMLEPKLENIMMHAMNE!Slides",
   "tArg" :
    {
     "k" : "-1",
     "name" : "Новый слайд",
     "visible" : "true"
    }
  }
}

### JSON-ответ:


{
 "DashboardSlidesAddResult" :
  {
   "k" : "3",
   "title" : "Новый слайд",
   "useSync" : "0",
   "useSelectionSync" : "0",
   "name" : "Новый слайд",
   "visible" : "1"
  }
}


public static DashboardSlide DashboardSlidesAdd(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tAdd = new DashboardSlidesAdd()
    {
        tArg = new DashboardSlide()
        {
            k = uint.MaxValue,
            name = "Новый слайд",
            visible = true
        },
        // Моникёр для работы со слайдами информационной панели
        mon = moniker + "!Slides"
    };
    // Создание слайда
    var result = somClient.DashboardSlidesAdd(tAdd);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
