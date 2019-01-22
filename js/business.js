$(document).ready(function(){
    $("#howitworksDescription").show();
    $("#benefitsDescription").hide();
    $("#pricingDescription").hide();
    $("#faqsDescription").hide();
    $("#serviceProvidersDescription").hide();
    $("#supportDescription").hide();
});

$("#howitworks").click(function(){
    $("#howitworksDescription").show();
    $("#benefitsDescription").hide();
    $("#pricingDescription").hide();
    $("#faqsDescription").hide();
    $("#serviceProvidersDescription").hide();
    $("#supportDescription").hide();
});

$("#benefits").click(function(){
    $("#howitworksDescription").hide();
    $("#benefitsDescription").show();
    $("#pricingDescription").hide();
    $("#faqsDescription").hide();
    $("#serviceProvidersDescription").hide();
    $("#supportDescription").hide();
});

$("#pricing").click(function(){
    $("#howitworksDescription").hide();
    $("#benefitsDescription").hide();
    $("#pricingDescription").show();
    $("#faqsDescription").hide();
    $("#serviceProvidersDescription").hide();
    $("#supportDescription").hide();
});

$("#faqs").click(function(){
    $("#howitworksDescription").hide();
    $("#benefitsDescription").hide();
    $("#pricingDescription").hide();
    $("#faqsDescription").show();
    $("#serviceProvidersDescription").hide();
    $("#supportDescription").hide();
});

$("#serviceproviders").click(function(){
    $("#howitworksDescription").hide();
    $("#benefitsDescription").hide();
    $("#pricingDescription").hide();
    $("#faqsDescription").hide();
    $("#serviceProvidersDescription").show();
    $("#supportDescription").hide();
});

$("#support").click(function(){
    $("#howitworksDescription").hide();
    $("#benefitsDescription").hide();
    $("#pricingDescription").hide();
    $("#faqsDescription").hide();
    $("#serviceProvidersDescription").hide();
    $("#supportDescription").show();
});





