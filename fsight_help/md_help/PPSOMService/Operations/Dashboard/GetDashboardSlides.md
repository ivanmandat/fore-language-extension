# GetDashboardSlides: Операция

GetDashboardSlides: Операция
-


**


# GetDashboardSlides


## Синтаксис


DashboardSlides GetDashboardSlides(string mon, DashboardSlides
 tArg)


## Параметры


mon. Моникёр
 для работы со слайдами информационной панели.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDashboardSlides
 получает настройки слайдов информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Slides», а в поле tArg.its
 пустые значения или значения по умолчанию для тех полей, значения которых
 необходимо получить. Моникёр может быть получен при выполнении операции
 [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет полученная информация о слайдах
 информационной панели.


## Пример


Ниже приведён пример получения списка слайдов информационной панели.
 В запросе передаётся моникёр для работы со слайдами и список получаемых
 для слайдов настроек. В ответе возвращается полученная информация.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDashboardSlides xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NPIEIDPOHJAFGOAELKELIPCKGACGDODEJKMKLMAKBEHEPNNL!M!S!PNNJOPHPOHJAFGOAEICILHADAKIJGHMLEMLEPKLENIMMHAMNE!Slides</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <title />
  <settings />
  <publicated>false</publicated>  <name />
  <visible>false</visible>  </it>
  </its>
  <activeIndex>2147483647</activeIndex>  <canUsePublication>false</canUsePublication>  </tArg>
  </GetDashboardSlides>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDashboardSlidesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <title>Слайд 1</title>  <publicated>0</publicated>  <name>Слайд 1</name>  <visible>1</visible>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <title>Слайд 2</title>  <publicated>0</publicated>  <name>Слайд 2</name>  <visible>1</visible>  </it>
  </its>
  <activeIndex xmlns="****">0</activeIndex>  <canUsePublication xmlns="****">0</canUsePublication>  </GetDashboardSlidesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDashboardSlides" :
  {
   "mon" : "NPIEIDPOHJAFGOAELKELIPCKGACGDODEJKMKLMAKBEHEPNNL!M!S!PNNJOPHPOHJAFGOAEICILHADAKIJGHMLEMLEPKLENIMMHAMNE!Slides",
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "k" : "-1",
           "title" : "",
           "settings" : "",
           "publicated" : "false",
           "name" : "",
           "visible" : "false"
          }
        ]
      },
     "activeIndex" : "2147483647",
     "canUsePublication" : "false"
    }
  }
}

### JSON-ответ:


{
 "GetDashboardSlidesResult" :
  {
   "its" :
    {
     "it" :
      [
        {
         "k" : "1",
         "title" : "Слайд 1",
         "publicated" : "0",
         "name" : "Слайд 1",
         "visible" : "1"
        },
        {
         "k" : "2",
         "title" : "Слайд 2",
         "publicated" : "0",
         "name" : "Слайд 2",
         "visible" : "1"
        }
      ]
    },
   "activeIndex" : "0",
   "canUsePublication" : "0"
  }
}


public static DashboardSlides GetDashboardSlides(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDashboardSlides()
    {
        tArg = new DashboardSlides()
        {
            activeIndex = int.MaxValue,
            canUsePublication = new bool(),
            its = new DashboardSlide[]
            {
                new DashboardSlide()
                {
                    k = uint.MaxValue,
                    name = string.Empty,
                    publicated = new bool(),
                    settings = string.Empty,
                    title = string.Empty,
                    visible = new bool()
                }
            }
        },
        // Моникёр для работы со слайдами информационной панели
        mon = moniker + "!Slides"
    };
    // Получение информации о слайдах
    var result = somClient.GetDashboardSlides(tGet);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
